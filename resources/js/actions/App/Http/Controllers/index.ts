import AnalyticsController from './AnalyticsController'
import LabsController from './LabsController'
import Settings from './Settings'
import Api from './Api'
const Controllers = {
    AnalyticsController: Object.assign(AnalyticsController, AnalyticsController),
LabsController: Object.assign(LabsController, LabsController),
Settings: Object.assign(Settings, Settings),
Api: Object.assign(Api, Api),
}

export default Controllers