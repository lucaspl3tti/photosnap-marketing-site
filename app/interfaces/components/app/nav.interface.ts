export interface NavBarData {
  root: string
  rootTitle: string
  navItems: NavBarItem[]
  inviteBtn: string
}

export interface NavBarItem {
  id: string
  title: string
  url: string
}
