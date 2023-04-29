import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.gammel'
// 'fusion', 'gammel', 'candy', 'ocean', 'zune', 'carbon', 'umber'
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: 'column3d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Popular Repos', //Set the chart caption
        xAxisName: 'Repos', //Set the x-axis name
        yAxisName: 'Stars',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
        theme: 'gammel', //Set the theme for your chart
      },
      data: data,
    },
  }

  return <ReactFC {...chartConfigs} />
}
export default Column3D
