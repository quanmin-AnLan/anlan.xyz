<template>
	<section>
		<el-table
			:data="tableData"
			border
			header-cell-class-name='table-header'
			stripe>
			<el-table-column
				v-for='item in headerSet'
				:key='item.prop'
				:prop='item.prop'
				:label='item.label'
        :align='item.align ? item.align : "center"'>
				<!-- 表头 -->
				<template slot="header" slot-scope="scope">
					<span>{{scope.column.label}}</span>
				</template>
				<!-- 表体 -->
				<template slot-scope="scope">
					<div v-if="item.prop==='question'">
            <a :href="scope.row.href">{{scope.row.title}}</a>
					</div>
          <div v-else-if="item.prop==='success'">
            <span>{{scope.row.success}}</span>
          </div>
          <div v-else>
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
};
</script>