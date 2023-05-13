import ContentList from "../pages/contentList";
import ReviewList from "../pages/reviewList";

const routes = [
  {
    path: '/',
    exact: true,
    component: ContentList
  },
  {
    path: '/reviewList',
    exact: true,
    component: ReviewList
  },
];

export default routes;