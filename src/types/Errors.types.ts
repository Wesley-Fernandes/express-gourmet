

export interface FirebaseAdminError{
    errorInfo: {
        code: string,
        message: string
    },
    codePrefix: string,
    page: string
}