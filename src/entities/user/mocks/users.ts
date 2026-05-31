import type {User} from "@/entities/user/model/types.ts";

export const MOCK_USERS:User[] =  [
    {
        id: 'd121d23d2-21dddhg12-bgbhj211',
        login: 'user',
        password: 'user',
        role: 'user',
        name: 'Александр',
        lastname: 'Фалеев',
        email: 'aaffaleev@gmail.com',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBdXRoIFNlcnZlciIsInN1YiI6ImF1dGgiLCJleHAiOjE1MDU0Njc3NTY4NjksImlhdCI6MTUwNTQ2NzE1MjA2OSwidXNlciI6MX0.9VPGwNXYfXnNFWH3VsKwhFJ0MazwmNvjSSRZ1vfZUU',
        accounts: [
            {
                id: 1,
                platform: 'wildberries',
                phoneNumber: '+7(917)533-08-48'
            },
            {
                id: 2,
                platform: 'ozon',
                phoneNumber: '+7(917)533-08-48'
            },
            {
                id: 3,
                platform: 'cdek',
                phoneNumber: '+7(917)533-08-48'
            }
        ]
    }
];