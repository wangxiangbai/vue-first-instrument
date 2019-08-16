<template>
  <div id="weather" class="weather">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">
        <el-row>
          <el-col :span="24" class="list">
            <div>

              <el-divider><i class="el-icon-hot-water">未来天气列表</i></el-divider>
              <el-table
                :data="tableData"
                style="width: 100%"
                border>
                <el-table-column
                  prop="date"
                  label="日期"
                >
                </el-table-column>
                <el-table-column
                  prop="high"
                  label="高温"
                  width="280">
                </el-table-column>
                <el-table-column
                  prop="low"
                  label="低温">
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="天气类型">

                </el-table-column>

              </el-table>
            </div>
          </el-col>
        </el-row>


<el-divider content-position="right">温度趋势图</el-divider>
        <el-row>
          <el-col :span="24" class="temperature-chart">
            <div>

              <ve-line :data="chartData"></ve-line>
            </div>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>
<script src="https://cdn.bootcss.com/echarts/4.2.1-rc1/echarts.min.js"></script>
<script>
    import VeLine from 'v-charts/lib/line.common'
    export default {
        name:'weather',
        components:{VeLine},

        data: function () {
            return{
                tableData:[
                     {
            "date": "8.15",
            "sunrise": "05:28",
            "high": "高温 34.0℃",
            "low": "低温 24.0℃",
            "sunset": "19:35",
            "aqi": 87,
            "ymd": "2019-07-24",
            "week": "星期三",
            "fx": "西北风",
            "fl": "3-4级",
            "type": "晴",
            "notice": "阴晴之间，谨防紫外线侵扰"
          }, {
            "date": "8.16",
            "sunrise": "05:28",
            "high": "高温 33.0℃",
            "low": "低温 22.0℃",
            "sunset": "19:35",
            "aqi": 87,
            "ymd": "2019-07-24",
            "week": "星期三",
            "fx": "西北风",
            "fl": "3-4级",
            "type": "晴转多云",
            "notice": "阴晴之间，谨防紫外线侵扰"
          },
                ],
              chartData: {
                columns: ['date', 'high', 'low'],
                rows: [
                  { 'date': '08-15', 'high': 34,'low': 25 },
                  { 'date': '08-16', 'high': 33,'low':22},
                  { 'date': '08-17', 'high': 32,'low': 22},
                  { 'date': '08-18', 'high': 32,'low':23 },
                  { 'date': '08-19', 'high': 32 ,'low':22},
                  { 'date': '08-20', 'high': 33 ,'low':25}
        ]
              }

          }

        }
    }
</script>

