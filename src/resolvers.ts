import { GUserResolvers, GModerationStateResolvers } from './generated.gql'


export const userResolvers: GUserResolvers = {
    name: () => 'name',
    moderation: async (user) => {
        // user.id exists, so we can get relevant moderation, but types are wrong
        return {
            pending: () => [{id: 'get list 1 by user.id'}],
            history: () => [{id: 'get list 2 by user.id'}]
        }
    }
}

export const moderationResolvers: GModerationStateResolvers = {
    pending: async (moderationState) => {
        // No access to user.id
        return []
    }

}
