import { userEmailState } from "@/store/selectors/userEmail";
import { useRecoilValue } from "recoil";
import { UserProfileDropdown } from "@/shadcn-components/ui/user-profile-dropdown";

export const UserProfileBanner = () => {
  const userEmail = useRecoilValue(userEmailState);
  const userBannerInitials = `${userEmail?.charAt(0).toUpperCase() ?? ""}`;

  return (
    <div className="hidden lg:block mt-1.5 mr-2 ">
      <UserProfileDropdown
        email={userEmail ?? undefined}
        initials={userBannerInitials}
      ></UserProfileDropdown>
    </div>
  );
};
