import {
    HOME_PAGE,
    MINT_DETAIL_PAGE,
    MINTS_PAGE,
    PARITIES_PAGE,
    PARITY_DETAIL_PAGE,
    POST_DETAIL_PAGE,
    POSTS_PAGE,
} from "./utils/consts";
import HomePage from "./pages/HomePage/HomePage";
import MintsPage from "./pages/MintsPage/MintsPage";
import ParitiesPage from "./pages/ParitiesPage/ParitiesPage";
import ParityDetailPage from "./pages/ParityDetailPage/ParityDetailPage";
import MintDetailPage from "./pages/MintDetailPage/MintDetailPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import PostsPage from "./pages/PostsPage/PostsPage";

export const authRoutes = [

]

export const publicRoutes = [
    {
        path: HOME_PAGE,
        Component: HomePage
    },
    {
        path: MINTS_PAGE,
        Component: MintsPage
    },
    {
        path: PARITIES_PAGE,
        Component: ParitiesPage
    },
    {
        path: POSTS_PAGE,
        Component: PostsPage
    },
    {
        path: PARITY_DETAIL_PAGE + '/:prefix/:id',
        Component: ParityDetailPage
    },
    {
        path: MINT_DETAIL_PAGE + '/:prefix/:id',
        Component: MintDetailPage
    },
    {
        path: POST_DETAIL_PAGE + '/:id',
        Component: PostDetailPage
    },
]