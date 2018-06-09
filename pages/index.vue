<template>
    
    <div class="row">
        <div class='col-md-2'>
            <div v-for="a of apps" :key='a' style='border-bottom:1px solid tomato;'>
                <nuxt-link :to="a.key" style='padding:3px 10px;display:block;'>
                    {{a.name}}
                </nuxt-link>
            </div>
        </div>
        <div class='col-md-2'> </div>
        <div class='col-md-8'>
          <nuxt-child :key='$route.params.appname'></nuxt-child>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      apps: [
        { name: "照片交换", key: "changeion" },
        { name: "博客", key: "changev3" },
        { name: "租房", key: "public2" },
        { name: "后台管理", key: "staff2" },
        { name: "language", key: "language" },
        { name: "cafe", key: "cafe" },
        { name: "中越贸易", key: "zhongviet" }
      ]
    };
  },
  //   layout: "nospider",
  components: {},
  methods: {}
};
</script>

<style>
</style>