import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.ocean'
// 'fusion', 'gammel', 'candy', 'ocean', 'zune', 'carbon', 'umber'
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Bar3D = ({ data }) => {
  const chartConfigs = {
    type: 'bar3d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Forked Repos', //Set the chart caption
        xAxisName: 'Repos', //Set the x-axis name
        yAxisName: 'Forks',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
        theme: 'ocean', //Set the theme for your chart
      },
      data: data,
    },
  }

  return <ReactFC {...chartConfigs} />
}
export default Bar3D
