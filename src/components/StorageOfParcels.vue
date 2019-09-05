<template>
  <div class="storage">
    <h2>包裹入库</h2>
        <div id="storageForm">
             <span>运单号：</span><input v-model="orderNumber" placeholder="请输入运单号"><br/>
             <span>收件人：</span><input v-model="name" placeholder="请输入收件人姓名"><br/>
             <span>电话：</span><input v-model="phone" placeholder="请输入收件人电话"><br/>
             <span>重量：</span><input v-model="weight" placeholder="请输入订单重量"><br/><br/>
        </div>
        <div id="">
            <button @click="makeSure">确定</button>
        </div>
  </div>
</template>

<script>
export default {
        name: "storage-Form",
        data: function () {
            return {
                formMessege:{
                    orderNumber: "",
                    name:"",
                    phone:"",
                    weight:""
                }   
            }
        },
        methods: {
            makeSure: function () {
                let formData = new FormData();
                for(var key in this.formMessege){
                    formData.append(key,this.formMessege[key]);
                }
                this.$store.dispatch('addPackage',formData);
            }
        }
    }

</script>
