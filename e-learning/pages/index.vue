<template>
  <div class="grid">
   <div class="content-box ml-5">
   <h1>ยินดีต้อนรับสู่เว็บ e-learning</h1>
   <p>ตัวเลือกหลักสูตรที่มากที่สุดในโลก</p>
  
   </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  layout: 'firstPage'
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  align-items: center;
  background: url('~assets/introduce.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  height:100vh;
  background-position: center;
 
}
.content-box{
  background-color:#fff;
  width:35%;
  text-align: center;
  border-radius:2px;
  
  
  
}
.content-box > h1{
  margin-top:15px;
}
.search-data{
  width: 80%;
  height: 100%;
  padding: 0 10px;
  color: #fff;
  font-size: 17px;
  border: none;
  
  background: none;
}
@media only screen and (max-width: 600px) {
  .grid {
    height:60vh;
    background: rgb(255, 0, 128);
  }
  .content-box{
    margin:auto;
    width:80%;
  }
}
</style>
