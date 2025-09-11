import { ProtectedRoute } from "../../components/ProtectedRoute";
import AuthenticatedLayout from "../authenticated-layout";

export default function DelegateDashboardPage() {
  return (
    <AuthenticatedLayout>
      <div suppressHydrationWarning>
        <ProtectedRoute>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Delegate Dashboard</h1>
              <div className="flex items-center gap-2">
                <span className="bg-burkina-green text-white px-3 py-1 rounded-full text-sm">
                  Delegate #140
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-3">
                  Community Management
                </h2>
                <p className="text-black/70 mb-4">
                  Manage community members, groups, and activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>View member directory</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Manage groups and forums</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Post announcements</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-3">
                  Event Organization
                </h2>
                <p className="text-black/70 mb-4">
                  Plan and manage community events and gatherings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Create new events</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Manage RSVPs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Send event reminders</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-3">
                  Content Management
                </h2>
                <p className="text-black/70 mb-4">
                  Create and manage news, blog posts, and resources.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Publish articles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Upload resources</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Moderate comments</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-3">
                  Reports & Analytics
                </h2>
                <p className="text-black/70 mb-4">
                  View community engagement and activity metrics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Membership growth</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Event attendance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-burkina-green rounded-full mr-2"></span>
                    <span>Content engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ProtectedRoute>
      </div>
    </AuthenticatedLayout>
  );
}
