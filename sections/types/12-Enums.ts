enum UserResponse {
    No,
    Yes
}

console.log(UserResponse)

enum LoginResult {
    SUCCESS,
    USER_NOT_EXIST,
    PASSWORD_ERROR
}

const res: any = 0
console.log(res === LoginResult.SUCCESS)
