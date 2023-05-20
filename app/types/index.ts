import { User } from "@prisma/client";

export type SafeUser = Omit<
    User, 
    'createdAt' | 'updatedAt' | 'emailVerfied'> & {
        createdAt: string;
        updatedAt: string;
        emailVerified: string | null;
    }