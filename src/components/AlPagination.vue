<template>
  <el-pagination 
    hide-on-single-page 
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange" 
    :current-page="currentPage"
    :page-sizes="sizes"
    :page-size="pageSize" 
    layout="slot, sizes, prev, pager, next, jumper"
    :total="total">
    <span class="el-pagination__total">共{{Math.ceil(total/pageSize)}}页</span>
  </el-pagination>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    sizes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.$emit('update:pageSize', val);
    },
    handleCurrentChange(val) {
      this.$emit('update:currentPage', val);
    },
  },
};
</script>