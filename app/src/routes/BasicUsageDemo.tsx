import { Container, Grid, Stack, Typography } from '@mui/material';
import {
	Form,
	useForm,
	FormValues,
	Field,
	FieldLabel,
	FieldGroup,
} from '@btdtech/reform';
import { useState } from 'react';
import ReactJson from 'react-json-pretty';
import { Checkable } from '../components/Checkable';

export const BasicUsageDemo = () => {
	const [form, { errors }] = useForm({
		validations: {
			givenName: { minLength: 2, maxLength: 10, required: true },
			familyName: { minLength: 2, maxLength: 10, required: true },
		},
	});

	const [values, setValues] = useState<FormValues>({});

	const handleSubmit = (formValues: FormValues) => {
		setValues(formValues);
	};

	return (
		<Container>
			<Grid container spacing={5}>
				<Grid item xs={12}>
					<Typography variant="h1">Basic usage</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Form form={form} onSubmit={handleSubmit}>
						<Stack direction="column" spacing={2}>
							<Field name="givenName">
								<FieldLabel>Given name</FieldLabel>
								<input autoFocus />
								<>
									{errors && errors.givenName && (
										<Typography variant="caption" color="error">
											{errors.givenName.message}
										</Typography>
									)}
								</>
							</Field>
							<Field name="familyName">
								<FieldLabel>Family name</FieldLabel>
								<input />
								<>
									{errors && errors.familyName && (
										<Typography variant="caption" color="error">
											{errors.familyName.message}
										</Typography>
									)}
								</>
							</Field>
							<Field name={['legals', 'agreed']} orientation="row">
								<input type="checkbox" />
								<FieldLabel>Terms and conditions</FieldLabel>
							</Field>
							<FieldGroup name={['skills', 'languages']} multiple>
								<FieldLabel>Languages</FieldLabel>
								<Checkable
									value="javascript"
									label="Javascript"
									type="checkbox"
								/>
								<Checkable value="java" label="Java" type="checkbox" />
								<Checkable value="python" label="Python" type="checkbox" />
							</FieldGroup>
							<FieldGroup name={['other', 'demographic', 'atsi']}>
								<FieldLabel>ATSI</FieldLabel>
								<Checkable value="aboriginal" label="Aboriginal" type="radio" />
								<Checkable
									label="Torres Strait Islander"
									value="torres-strait-islander"
									type="radio"
								/>
								<Checkable value="none" label="None" type="radio" />
							</FieldGroup>
							<Field name={['other', 'demographic', 'gender']}>
								<FieldLabel>Gender</FieldLabel>
								<select>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
							</Field>
							<Stack direction={'row-reverse'}>
								<button type="submit">Submit</button>
							</Stack>
						</Stack>
					</Form>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ReactJson
						data={values}
						style={{ padding: 16, backgroundColor: '#efefef' }}
					></ReactJson>
				</Grid>
			</Grid>
		</Container>
	);
};
