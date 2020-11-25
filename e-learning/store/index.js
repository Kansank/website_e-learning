import Vuex from "vuex"
import axios from "axios"

  const createStore = () => {
    return new Vuex.Store({
    state:{
      // ข้อมูล
      loadData:[],
      drawer: false

    },
    mutations:{
      // จัดการข้อมูลใน State
      setCourseState(state,courses){
        state.loadData = courses
      },
      set_drawer(state, newVal) {
        state.drawer = newVal
      }
    },
    actions:{
      //ทำงานร่วมกับ backend เรียกใช้ผ่าน component
      nuxtServerInit(vuexContext,context){
        return axios.get("https://e-learning-e58b4.firebaseio.com/data/courses.json")
        .then(res => {
           vuexContext.commit("setCourseState",res.json() ) 
           console.log(res.courses.json());
        }).catch( e => context.error(e));
      }
    },
    getters:{
        // นำ state ไปใช้งาน
        getAllCourses(state){
            return state.loadData
        }
    }
  });
  }

  export default createStore