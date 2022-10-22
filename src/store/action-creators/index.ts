import * as PostsActionCreators from './posts'
import * as CommentsActionCreators from './comments'

// eslint-disable-next-line
export default {
    ...PostsActionCreators,
    ...CommentsActionCreators
}