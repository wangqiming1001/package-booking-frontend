import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
      addPackage:function(store,formData){
          const url = "**********";
          axios({
              method:"post",
              url:"xxxxxxx",
              headers: {
              "Content-Type": "multipart/form-data"
              },
              withCredentials:true,
              data:formData
          }).then((res)=>{
                console.log(res);
          });
      } 
  }
})
