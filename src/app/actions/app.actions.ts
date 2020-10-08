import { Action } from '@ngrx/store';

// Section 2
export const TEST_ACTION = 'TEST_ACTION';

// Section 3
export class TestAction implements Action {
    readonly type = TEST_ACTION;

    constructor(public payload) {}
}

export type Actions = TestAction;
