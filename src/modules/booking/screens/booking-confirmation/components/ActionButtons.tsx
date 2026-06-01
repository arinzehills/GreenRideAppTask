import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
}

export default function ActionButtons({
  onConfirm,
  onCancel,
  confirmLabel = "Confirm Booking",
}: Props) {
  return (
    <>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={onConfirm}
        activeOpacity={0.8}
      >
        <Text style={styles.confirmButtonText}>{confirmLabel}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={onCancel}
        activeOpacity={0.7}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: "#00C853",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  cancelButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
});