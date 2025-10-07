"use server"

import { db } from "@/db"

const getProperties = async () => {
    try {
        const properties = await db.property.findMany(
            {
                include: {
                    images: true
                },
                where: {
                    isSold: false
                }
            }
        )
        return properties;
    } catch (error) {
        throw error;
        console.log(error)
    }
}

export { getProperties }