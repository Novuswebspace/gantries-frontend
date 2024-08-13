import Spinner from "@/components/globals/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <Spinner className="animate-spin text-primary w-12 h-12 mx-auto" />
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  )
}
