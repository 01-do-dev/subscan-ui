export default [
  {
    name: "root",
    path: "/",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "Views/Dashboard")
  },
  {
    name: "block",
    path: "/block",
    component: () => import(/* webpackChunkName: "block" */ "Views/Block")
  },
  {
    name: "blockDetail",
    path: "/block/:key",
    component: () =>
      import(/* webpackChunkName: "BlockDetail" */ "Views/BlockDetail")
  },
  {
    name: "extrinsic",
    path: "/extrinsic",
    component: () =>
      import(/* webpackChunkName: "extrinsic" */ "Views/Extrinsic")
  },
  {
    name: "extrinsicDetail",
    path: "/extrinsic/:key",
    component: () =>
      import(/* webpackChunkName: "extrinsicDetail" */ "Views/ExtrinsicDetail")
  },
  {
    name: "transfer",
    path: "/transfer",
    component: () => import(/* webpackChunkName: "transfer" */ "Views/Transfer")
  },
  {
    name: "account",
    path: "/account",
    component: () => import(/* webpackChunkName: "account" */ "Views/Account")
  },
  {
    name: "accountDetail",
    path: "/account/:key",
    component: () => import(/* webpackChunkName: "account" */ "Views/AccountDetail")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "404" */ "Views/ErrorPage/404")
  },
  {
    name: "noData",
    path: "/noData",
    component: () => import(/* webpackChunkName: "noData" */ "Views/ErrorPage/noData")
  },
  {
    path: "*",
    redirect: "/404"
  }
];
