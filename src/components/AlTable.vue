<template>
	<section>
		<el-table	:data="tableData"	stripe :default-sort = "{prop: 'updateTime', order: 'descending'}">
			<el-table-column
				v-for='item in headerSet'
				:key='item.prop'
				:prop='item.prop'
				:label='item.label'
        :width='item.width || ""'
        :align='item.align || "center"'
        :sortable="item.sortable || false"
        :fixed="item.fixed || false">
				<!-- 表头 -->
				<template slot="header" slot-scope="scope">
          <span v-if="item.specialHead">
            <slot name="special-head" :scope="scope"></slot>
          </span>
					<span v-else>{{scope.column.label}}</span>
				</template>
				<!-- 表体 -->
				<template slot-scope="scope">
					<div v-if="item.prop === 'url'">
            <a :href="scope.row.href">{{scope.row.title}}</a>
					</div>
          <div v-else-if="item.prop === 'operate'">
            <slot name="operate-detail" :scope="scope"></slot>
          </div>
          <div v-else-if="item.specialContent">
            <slot name="special-content" :scope="scope"></slot>
          </div>
          <div v-else-if="item.prop === 'sort'">
            <img :src="scope.row.sort" style="width:30px;" />
          </div>
          <div v-else :style="'color:' + scope.row['color'+item.prop] || ''">
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