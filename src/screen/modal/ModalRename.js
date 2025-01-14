import React, { useState, useEffect } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export const ModalRename = ({
  show,
  onClose,
  newName,

  setNewName,
  renameFile,
  selectedItem,
}) => {

  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Rename</Text>
          </View>
          <View style={styles.modalInputContainer}>
            <TextInput
              placeholderTextColor={'#007bff'}
              placeholder="Enter New Name"
              value={newName}
              onChangeText={setNewName}
              style={styles.modalInput}
              keyboardType="default"
            />
          </View>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onClose();
                renameFile();
              }}
              style={[styles.modalButton, styles.modalButtonOk]}>
              <Text style={styles.modalButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 36,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 16,
  },
  modalHeader: {
    width: '100%',
  },
  modalHeaderText: {
    color: '#292524',
    fontSize: 18,
    fontWeight: '500',
  },
  modalInputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  modalInput: {
    marginVertical: 12,
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#3b82f6',
    color: '#007bff',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingHorizontal: 16,
  },
  modalButtonOk: {
    marginLeft: 28,
  },
  modalButtonText: {
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: '600',
  },
});