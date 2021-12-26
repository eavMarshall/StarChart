
import login from "./../state/login";

test('test user state is saved', () => {
    login.setUser({
        uid: "test id",
        displayName: "test name",
        email: "test email",
    });

    expect(login.state.user.id).toBe("test id");
});