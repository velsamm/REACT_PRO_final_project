import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	user: Partial<User> | null;
	accessToken: string;
}

const createInitState = (): UserState => {
	const lsUser = window.localStorage.getItem('user');
	const lsToken = window.localStorage.getItem('token');

	if (lsUser && lsToken) {
		return {
			user: JSON.parse(lsUser),
			accessToken: lsToken,
		};
	}

	return {
		user: null,
		accessToken: '',
	};
};

export const userSlice = createSlice({
	name: 'user',
	initialState: createInitState(),
	reducers: {
		setAccessToken(state, action: PayloadAction<Pick<Token, 'accessToken'>>) {
			state.accessToken = action.payload.accessToken;
		},
		clearUser() {
			return createInitState();
		},
		setUser: (state, action: PayloadAction<UserState['user']>) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				(action) => action.type === userActions.setAccessToken.type,
				(_, action: PayloadAction<Pick<Token, 'accessToken'>>) => {
					window.localStorage.setItem('token', action.payload.accessToken);
				}
			)
			.addMatcher(
				(action) => action.type === userActions.setUser.type,
				(_, action: PayloadAction<UserState['user']>) => {
					const userStringified = JSON.stringify(action.payload);
					window.localStorage.setItem('user', userStringified);
				}
			)
			.addMatcher(
				(action) => action.type === userActions.clearUser.type,
				() => {
					window.localStorage.removeItem('user');
					window.localStorage.removeItem('token');
				}
			);
	},
	selectors: {
		getUser: (state: UserState) => state.user,
		getAccessToken: (state: Token) => state.accessToken,
	},
});

export const userActions = { ...userSlice.actions };
export const userSelectors = userSlice.selectors;
