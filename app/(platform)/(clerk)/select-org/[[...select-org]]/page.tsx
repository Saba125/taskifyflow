import { OrganizationList } from "@clerk/nextjs";

const SelectOrg = () => {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
};

export default SelectOrg;
