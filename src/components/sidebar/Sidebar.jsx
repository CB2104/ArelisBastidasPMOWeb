import { ToggleButtons } from './toggleButtons/ToggleButtons'
import { Links } from './links/Links'
import './sidebar.scss'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="bg">
            <Links/>
        </div>
        <ToggleButtons/>
    </div>
  )
}
