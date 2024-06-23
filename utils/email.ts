

class EmailUtils {
    generateEmailAlias(email: string): string {
        const email_parts: string[] = email.split("@");
        return `${email_parts[0]}+${Math.random().toString(7).slice(2, 7)}_automation@${email_parts[1]}`
    }
}

export const emailUtils = new EmailUtils();
