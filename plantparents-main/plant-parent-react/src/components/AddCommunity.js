import { useNavigate } from 'react-router-dom';

import Heading from './Heading';
import Form from './Form';

import { addCommunity } from '../services/communityService';

function AddCommunity() {
  const navigate = useNavigate();

  const handleSave = (values) => {
    return addCommunity(values);
  };

  const handleSuccess = (community) => {
    navigate(`/Community/${community.communityId}`);
  };

  return (
    <>
      <Heading>Add Community</Heading>
      <Form fields={[
        { name: 'name', label: 'Name' },
      ]} onSave={handleSave} recordType="Community" onSuccess={handleSuccess} />
    </>
  );
}

export default AddCommunity;