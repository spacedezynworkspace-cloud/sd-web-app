import { useGetAllSupervisorsPaymentsQuery } from '@/lib/services/supervisor/supervisors.api';

const SupervisorPayment = () => {
  const { data: supervisorsData, isLoading: isSupervisorsLoading } =
    useGetAllSupervisorsPaymentsQuery({});
  console.log(supervisorsData);

  const onSubmit = async () => {
    console.log('Submit...');

    // const payload: UpdateProjectRequest = {
    //   id: projectId || '',
    //   data: {
    //     stages: stages,
    //   },
    // };

    // try {
    //   const res = await updateProject(payload).unwrap();
    //   console.log(res);

    //   addToast({
    //     title: 'Project updated',
    //     description: res.message,
    //     color: 'success',
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // [#F19645];

  return <section className="flex flex-col">Supervisor pyament</section>;
};

export default SupervisorPayment;
