<template>
<div>
<!-- <div>
        <span>菜鸟驿站</span>
        <button @click="queryAll">ALL</button>
        <button @click="queryBooked">已预约</button>
        <button @click="queryReceived">已取件</button>
        <button @click="queryUnbooked">未取件</button>
    </div> -->
    <a-table :columns="columns"
        :rowKey="record => record.login.uuid"
        :dataSource="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
    >
        <template slot="name" slot-scope="name">
        {{name.first}} {{name.last}}
        </template>
    </a-table>
   </div> 
</template>
<script>
import reqwest from 'reqwest';
const columns = [{
  title: '运单号',
  dataIndex: 'orderName',
  sorter: true,
  width: '20%',
  scopedSlots: { customRender: 'orderName' },
}, {
  title: '收件人',
  dataIndex: 'name',
  width: '20%',
}, {
  title: '电话',
  dataIndex: 'phone',
},
 {
  title: '状态',
  dataIndex: 'status',
},
 {
  title: '预约状态',
  dataIndex: 'timeOfAppointment',
}
];

export default {
  mounted() {
    this.fetch();
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
    }
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch (params = {}) {
      console.log('params:', params);
      this.loading = true
      reqwest({
        url: 'http://localhost:8080/storage',
        method: 'get',
        data: {
          results: 10,
          ...params,
        },
        type: 'json',
      }).then((data) => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    }
  },
}
</script>