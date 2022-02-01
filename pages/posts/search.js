import {useFormik} from "formik";
import * as Yup from "yup";
import {MainLayout} from "../../components/MainLayout";
import {FormBody} from "../../components/FormComponents/FormBody"
import {TextField} from "../../components/FormComponents/TextField";
import {useRouter} from "next/router";
import {ComboBoxField} from "../../components/FormComponents/ComboBoxField";
import {useEffect, useState} from "react";
import {getOptions} from "../../api/options/getOptions";

const formValidation = Yup.object().shape({
    title: Yup.string().trim().max(30, `Too Long`).min(3, "Too Short").required(`Title is required`),
    color: Yup.string().required("Color is required"),
    // author: Yup.string().trim()
})

const SearchPosts = () => {
    const router = useRouter()

    const [options, setOptions] = useState([])

    useEffect(() => {
        async function loadOptions() {
            const options = await getOptions()
            console.log(options)
            setOptions(options)
        }

        if (options.length === 0) {
            loadOptions()
        }
    })

    const formik = useFormik({
        initialValues: {
            title: ``,
            color: ``,
            // author: ``,
        },
        validationSchema: formValidation,
        onSubmit: () => {
            router.push({
                pathname: `/posts`,
                query: formik.values
            })
        }
    })

    return (
        <MainLayout title={`Search Posts`}>
            <FormBody
                onSubmit={formik.handleSubmit}
                buttonLabel={`Search`}
            >
                <TextField
                    label={`Very Big Enormous Large Title`}
                    name={`title`}
                    placeholder={'Input Some Text'}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.title}
                />

                <ComboBoxField
                    label={`Some ComboBox`}
                    name={`color`}
                    value={formik.values.color}
                    options={options}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.color}
                />

            </FormBody>

        </MainLayout>
    )
}

export default SearchPosts
