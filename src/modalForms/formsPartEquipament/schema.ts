import * as yup from "yup"

export const schema = yup.object({
    tom: yup.string().required("Este campo é obrigatório"),
    defect: yup.string().required("Este campo é obrigatório"),
    observation: yup.string(),
    image: yup.string(),
    tonality: yup.string().required("Este campo é obrigatório"),
    texture: yup.string().required("Este campo é obrigatório"),
    shine: yup.string().required("Este campo é obrigatório"),
    deformity: yup.string().required("Este campo é obrigatório"),
    diff: yup.string().required("Este campo é obrigatório")
})