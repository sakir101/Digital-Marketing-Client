export const getBaseUrl = (): string => {
    return process.env.NEXT_PUBLIC_API_URL || "https://marketing-server-six.vercel.app/api/v1"
}