import {expect, test, beforeAll} from 'vitest'
import {ResultCode} from "@/types/ResultCode";
import {createPinia, setActivePinia} from "pinia";
import AccountRequester from "@/requests/requesters/AccountRequester";
import {useAuthStore} from "@/stores/authStore";
import {DownturnRequester} from "@/requests/requesters/CalculateRequester";

beforeAll(async () => {
    setActivePinia(createPinia())
})

export async function loginTest() {
    const requester = new AccountRequester(useAuthStore());
    const response = await requester.loginPassword({
        login: "k.buiko04@mail.ru",
        password: "Str123ing##",
    });
    expect(response.code).toBe(ResultCode.OK);
    const response2 = await requester.loginToken();
    expect(response2.code).toBe(ResultCode.OK);

    const requester3 = new DownturnRequester();
    const response3 = await requester3.calculate();
    expect(response3.code).toBe(ResultCode.OK);
}

test.skip('registration test', async () => {
    const requester = new AccountRequester(useAuthStore());
    const response = await requester.registration({
        email: "k.buiko04@mail.ru",
        password: "Str123ing##",
        phone: "89137428483"
    });
    expect(response.code).toBe(ResultCode.OK);
})

test('login test', async () => {
    await loginTest();
})
