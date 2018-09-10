import login from './pages/login'
import dashboard from './pages/dashboard'
import chat from './pages/chatpage'
import inbox from './components/private-message/PrivateMessageInbox'
import compose from './components/private-message/PrivateMessageCompose'
import view from './components/private-message/PrivateMessageView'
import sent from './components/private-message/PrivateMessageSent'
import setting from './pages/setting'


export default[
    {path:'/',          component:login,    name:'home'},
    {path:'/dashboard', component:dashboard,name:'dashboard', meta:{title:'Dashboard' ,requiresAuth:true}},
    {path:'/chat',      component:chat,     name:'chat',      meta:{title:'Chat' ,requiresAuth:true}},
    {path:'/message-inbox',component:inbox, name:'inbox',     meta:{title:'Inbox Private Message' ,requiresAuth:true}},
    {path:'/message-new',component:compose, name:'new',       meta:{title:'New Message' ,requiresAuth:true}},
    {path:'/message/:id',component:view,    name:'view',      meta:{title:'Message' ,requiresAuth:true}},
    {path:'/message-sent',component:sent,   name:'sent',      meta:{title:'Message Sent' ,requiresAuth:true}},
    {path:'/setting',   component:setting,  name:'setting',   meta:{title:'Setting' ,requiresAuth:true}}
]