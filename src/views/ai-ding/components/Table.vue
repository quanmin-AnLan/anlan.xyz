<template>
	<section>
		<el-table
			:data="tableData"
			header-cell-class-name='table-header'
			stripe>
			<el-table-column
				v-for='item in headerSet'
				:key='item.prop'
				:prop='item.prop'
				:label='item.label'
        :width='item.width ? item.width : ""'
        :align='item.align ? item.align : "center"'>
				<!-- 表头 -->
				<template slot="header" slot-scope="scope">
					<span>{{scope.column.label}}</span>
				</template>
				<!-- 表体 -->
				<template slot-scope="scope">
					<div v-if="item.prop === 'question'">
            <a :href="scope.row.href">{{scope.row.title}}</a>
					</div>
          <div v-else-if="item.prop === 'sort'">
            <img :src="sortMap[scope.row.sort]" style="width:30px;" />
          </div>
          <div v-else :style="'color:' + colorMap[scope.row[item.prop]] || ''">
            <span>{{scope.row[item.prop]}}</span>
          </div>
				</template>
			</el-table-column>
		</el-table>
	</section>
</template>
<script lang="ts">
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    headerSet: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      colorMap: {
        困难: '#ec4c47',
        中等: '#ed7366',
        简单: '#009975',
      },
      sortMap: {
        0: 'http://www.python-spider.com/static/crawl/assets/logo/top1.png',
        1: 'http://www.python-spider.com/static/crawl/assets/logo/top2.png',
        2: 'http://www.python-spider.com/static/crawl/assets/logo/top3.png',
      },
    };
  },
};
</script>