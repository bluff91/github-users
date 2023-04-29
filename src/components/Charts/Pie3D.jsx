import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d',
    width: `100%`,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages', //Set the chart caption
        theme: 'candy', //Set the theme for your chart
        decimals: 0,
        pieRadius: '55%',
      },
      data: data,
    },
  }

  return <ReactFC {...chartConfigs} />
}
export default Pie3D
