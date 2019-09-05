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
            const urlStorage = "http://localhost:8080/storage";
                axios.post(urlStorage,formData).then((res)=>{
                        console.log(res);
                });
        },
      } 
  
})
