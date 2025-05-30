const serverAPIBaseURL: string = '/v1/api'

const axiosClient = axios.create({
    baseURL: serverAPIBaseURL,
})

// note
const setPasswordForNoteAPI = (
    password: string,
    logoutAll: boolean,
): Promise<TAxiosHTTPRes<TSuccess>> =>
    axiosClient.post('/note/set-password/' + getNoteUniqueNameFromURL(), { password, logoutAll })

const removePasswordForNoteAPI = (): Promise<TAxiosHTTPRes<TSuccess>> =>
    axiosClient.delete('/note/remove-password/' + getNoteUniqueNameFromURL())

const switchEditorAPI = (editor: EEditors): Promise<TAxiosHTTPRes<TSuccess>> =>
    axiosClient.post('/note/switch-editor/' + getNoteUniqueNameFromURL(), { editor })

// auth
const logoutAPI = (): Promise<TAxiosHTTPRes<TSuccess>> =>
    axiosClient.post('/auth/logout/' + getNoteUniqueNameFromURL())

const signInAPI = (password: string): Promise<TAxiosHTTPRes<TSuccess>> =>
    axiosClient.post('/auth/sign-in/' + getNoteUniqueNameFromURL(), { password })

// notification
const getNotificationsAPI = (lastNotif?: TNotif): Promise<TAxiosHTTPRes<TGetNotificationsResAPI>> =>
    axiosClient.post(`/notification/${pageData.noteId}`, { lastNotif: lastNotif || {} })

// lang
const requestLangAPI = (langCode: string): Promise<TAxiosHTTPRes<TSuccess>> =>
    axiosClient.post(`/lang/request-lang`, { langCode })

// article
const fetchArticleAPI = (): Promise<TAxiosHTTPRes<Blob>> =>
    axiosClient.get(`/article/fetch-article/${pageData.noteId}`, { responseType: 'blob' })

// tools
// const transcribeAudioAPI = (
//     formDataWithFile: FormData,
// ): Promise<TAxiosHTTPRes<TTranscribeAudiosResAPI>> =>
//     axiosClient.post('/tools/transcribe-audio/' + getNoteUniqueNameFromURL(), formDataWithFile)

const transcribeAudioAPI = async (
    formDataWithFile: FormData,
): Promise<TAxiosHTTPRes<TTranscribeAudiosResAPI>> => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 2000)
    })
    return {
        data: {
            confidence: 0.99,
            paragraphs: [{ sentences: ['anh la', 'mot', 'thang ngoc'], wordsCount: 5 }],
            transcription: 'anh la mot thang ngoc',
        },
    }
}
