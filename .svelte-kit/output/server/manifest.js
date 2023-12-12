export const manifest = {
	appDir: "_app",
	assets: new Set(["edit.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-616e6a63.js","imports":["_app/immutable/start-616e6a63.js","_app/immutable/chunks/index-6c230a90.js","_app/immutable/chunks/singletons-a5656164.js","_app/immutable/chunks/index-37129d4c.js","_app/immutable/chunks/control-a6874251.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "(authenticated)/dashboard",
				pattern: /^\/dashboard\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "(authenticated)/settings",
				pattern: /^\/settings\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "logout",
				pattern: /^\/logout\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "signup",
				pattern: /^\/signup\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "api/me",
				pattern: /^\/api\/me\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/me/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
