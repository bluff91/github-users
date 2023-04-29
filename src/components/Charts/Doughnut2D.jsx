import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// 'fusion', 'gammel', 'candy', 'ocean', 'zune', 'carbon', 'umber'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Doughnut2D = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: `100%`,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars Per Language', //Set the chart caption
        theme: 'fusion', //Set the theme for your chart
        decimals: 0,
        doughnutRadius: '45%',
        showPercentValues: 0,
        showPercentInToolTip: 0,
      },
      data: data,
    },
  }

  return <ReactFC {...chartConfigs} />
}
export default Doughnut2D
