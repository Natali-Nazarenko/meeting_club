type CreateAction = (
    type: string,
) => <T>(data?: T) => { type: string; payload?: T };

export const createAction: CreateAction = type => data => ({
    type,
    payload: data,
});
