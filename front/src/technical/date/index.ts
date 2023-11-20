import { format } from "date-fns"

export const formatDate = (date: Date, version?: string) => {
    return format(date, version??'dd-MM-yyyy')
}