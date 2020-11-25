<template>
  <v-card class="footer">
    <div class="f-details mt-5">
      <div class="text">
        <ul>
          <li>
            <nuxt-link to="#" target="_blank">
              e-learning for Business
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              สอนบน e-learning
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              เกี่ยวกับเรา
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              ติดต่อเรา
            </nuxt-link>
          </li>
        </ul>

        <ul>
          <li>
            <nuxt-link to="#" target="_blank">
              อาชีพ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              บล็อก
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              ความช่วยเหลือและการสนับสนุน
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              พันธมิตร
            </nuxt-link>
          </li>
        </ul>

        <ul>
          <li>
            <nuxt-link to="#" target="_blank">
              ข้อกำหนด
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              นโยบายความเป็นส่วนตัวและคุกกี้
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              Sitemap (แผนผังเว็บไซต์)
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">
              หลักสูตรแนะนำ
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="select mr-4">
        <v-select :items="items" label="เลือกภาษา" class="item"></v-select>
      </div>
    </div>
    <v-footer absolute class="font-weight-medium ">
      <v-col class="text-right" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: ["Thai", "English"]
    };
  }
};
</script>

<style lang="css" scoped>
a {
  color: #0f7c90;
  font-size: 14px;
  text-decoration: none;
}
.footer {
  height: 40vh;
}
.f-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  list-style-type: none;
}
.font-weight-medium {
  position: absolute;
  bottom: 0;
}

@media only screen and (max-width: 600px) {
  .footer {
    height: 40vh;
  }

  .text {
  }
  .select {
    margin-top: 0;
    align-items: center;
  }
}
</style>
