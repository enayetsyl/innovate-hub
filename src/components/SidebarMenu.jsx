import { menuData } from '../constant'
import SidebarMenuItem from './SidebarMenuItem'

const SidebarMenu = () => {
  return (
    <div className=' overflow-auto'>
      {
        menuData.map((item, index) => <SidebarMenuItem
        key={index}
        item={item}
        />
        )
      }
    </div>
  )
}

export default SidebarMenu