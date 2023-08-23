import * as yup from "yup"

export const schema = yup.object({
    tom: yup.string().required("Informar registro"),
    defect: yup.string().required("Informar registro"),
    observation: yup.string(),
    image: yup.string(),
    tonality: yup.string().required("Informar registro"),
    texture: yup.string().required("Informar registro"),
    shine: yup.string().required("Informar registro"),
    deformity: yup.string().required("Informar registro"),
    diff: yup.string().required("Informar registro")
})